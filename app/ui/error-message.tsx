const ErrorMessage = ({
  errors,
  errorMessage,
}: {
  errors?: string[] | undefined;
  errorMessage?: string | undefined | null;
}) => {
  return (
    <>
      {errors &&
        errors.map((error: string) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))}
      {errorMessage && (
        <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
      )}
    </>
  );
};

export default ErrorMessage;
