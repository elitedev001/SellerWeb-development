import IconProps from "./IconProps";
import IconWrapper from "./IconWrapper";

export default function SearchMedIcon({ ...wrapperProps }: IconProps): React.ReactElement {
  return (
    <IconWrapper viewBox={"0 0 20 20"} width={20} height={20} {...wrapperProps}>
      <path d="M8.83572 0.399902C13.4944 0.399902 17.271 4.17653 17.271 8.83523C17.271 10.8753 16.5468 12.7462 15.3415 14.2049L19.3651 18.2285C19.6788 18.5422 19.6788 19.0509 19.3651 19.3646C19.0514 19.6783 18.5427 19.6783 18.229 19.3646L14.2054 15.341C12.7467 16.5463 10.8758 17.2706 8.83572 17.2706C4.17701 17.2706 0.400391 13.4939 0.400391 8.83523C0.400391 4.17653 4.17701 0.399902 8.83572 0.399902ZM8.83572 2.00663C5.06439 2.00663 2.00712 5.0639 2.00712 8.83523C2.00712 12.6066 5.06439 15.6638 8.83572 15.6638C12.607 15.6638 15.6643 12.6066 15.6643 8.83523C15.6643 5.0639 12.607 2.00663 8.83572 2.00663Z" />
    </IconWrapper>
  );
}