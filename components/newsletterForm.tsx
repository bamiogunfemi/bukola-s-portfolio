import { KeyboardEvent, useState } from "react";
import { decode } from "html-entities";

const NewsletterForm = ({
  status,
  message,
  onValidated,
}: {
  status: string | null;
  message: string | Error | null;
  onValidated: Function;
}) => {
  const [error, setError] = useState<null | string>(null);
  const [email, setEmail] = useState<null | string>(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = (event: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message: string | null | any) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode(formattedMessage) : null;
  };

  return (
    <div className="newletter-wrapper">
      {status === "success" && !error ? (
        <div>
          <h4 className="descriptionWrapper">
            <span role="img" aria-labelledby="joy">
              🎉
            </span>{" "}
            Successfully subscribed! 🎉
          </h4>
          <p>
            Thank you, I love you .
            <span role="img" aria-labelledby="love">
              💛
            </span>
            .
          </p>
        </div>
      ) : (
        <>
          <div className="input-wrapper">
            <input
              onChange={(event) => setEmail(event?.target?.value ?? "")}
              type="email"
              placeholder="harrypotter@hogwats.com"
              onKeyUp={(event) => handleInputKeyEvent(event)}
            />
          </div>
          <div className="button-wrapper">
            <button onClick={handleFormSubmit}>
              {status === "sending" ? " Subscribing" : "Subscribe"}
            </button>
          </div>
          <div className="newsletter-form-info">
            {status === "sending" && (
              <div>Subscribing you to the best news letter ever</div>
            )}
            {status === "error" || error ? (
              <div className="newsletter-form-error">
                {error || getMessage(message)}
              </div>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
};

export default NewsletterForm;
