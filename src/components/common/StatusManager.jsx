import Loading from "./Loading";
import Error from "./Error";
import NoResults from "./NoResults";

export default function StatusManager({ isLoading, error, noResults, children }) {
	if (isLoading) return <Loading />;
	if (error) return <Error />;
	if (noResults) return <NoResults />;

	return <>{children}</>;
}
