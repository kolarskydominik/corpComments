import { useState, useMemo, useEffect, createContext, useContext } from 'react';
import { FeedbackItemType } from '../lib/types';
type FeedbackItemsContextType = {
  companyList: string[];
  filteredFeedbackItems: FeedbackItemType[];
  isLoading: boolean;
  errorMessage: string;
  handleAddFeedbackToList: (text: string) => void;
  handleSelectCompany: (company: string) => void;
};
const FeedbackItemsContext = createContext<FeedbackItemsContextType | null>(
  null
);
type FeedbackItemsContextProviderProps = {
  children: React.ReactNode;
};
export default function FeedbackItemsContextProvider({
  children,
}: FeedbackItemsContextProviderProps) {
  const [feedbackItems, setFeedbackItems] = useState<FeedbackItemType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');

  const filteredFeedbackItems = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter(
            (feedbackItem) => feedbackItem.company === selectedCompany
          )
        : feedbackItems,
    [feedbackItems, selectedCompany]
  );
  const companyList = useMemo(
    () =>
      feedbackItems
        .map((feedbackItem) => feedbackItem.company)
        .filter(
          (company, index, companies) => companies.indexOf(company) === index
        ),
    [feedbackItems]
  );

  const handleSelectCompany = (company: string) => {
    setSelectedCompany(company);
  };
  const handleAddFeedbackToList = async (text: string) => {
    const companyName = text
      .split(' ')
      .find((word) => word.includes('#'))!
      .substring(1);

    const newFeedbackItem = {
      id: Date.now(),
      upvoteCount: 0,
      badgeLetter: companyName[0].toUpperCase(),
      company: companyName,
      text: text,
      daysAgo: 0,
    };

    setFeedbackItems([...feedbackItems, newFeedbackItem]);

    await fetch(
      'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFeedbackItem),
      }
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks'
        );
        if (!res.ok) {
          throw Error();
        }
        const data = await res.json();
        setFeedbackItems(data.feedbacks);
      } catch (error) {
        setErrorMessage('Something went wrong.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <FeedbackItemsContext.Provider
      value={{
        companyList,
        filteredFeedbackItems,
        isLoading,
        errorMessage,
        handleAddFeedbackToList,
        handleSelectCompany,
      }}
    >
      {children}
    </FeedbackItemsContext.Provider>
  );
}

export function useFeedbackItemsContext() {
  const context = useContext(FeedbackItemsContext);
  if (!context) {
    throw new Error(
      'useFeedbackItemsContext must be used within a FeedbackItemsContextProvider'
    );
  }

  return context;
}
