import MailchimpSubscribe, { EmailFormFields } from "react-mailchimp-subscribe";
import NewsletterForm from "./newsletterForm";

const NewsletterSubscribe = () => {
  const MAILCHIMP_URL: string | any = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={(props) => {
        const { subscribe, status, message } = props || {};
        return (
          <NewsletterForm
            status={status}
            message={message}
            onValidated={(formData: EmailFormFields) => subscribe(formData)}
          />
        );
      }}
    />
  );
};

export default NewsletterSubscribe;
