type HashtagItemProps = {
  company: string;
  onClick: () => void;
};

export default function HashtagItem({ company, onClick }: HashtagItemProps) {
  return (
    <li>
      <button type="button" onClick={onClick}>
        #{company}
      </button>
    </li>
  );
}
