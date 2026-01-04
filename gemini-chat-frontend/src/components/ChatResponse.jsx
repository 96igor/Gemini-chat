const ChatResponse = ({ response }) => {
    if (!response) return null;

    const { candidates, usageMetadata } = response;

    return (
        <div className="container my-4">
            <h3>Response</h3>
            {candidates?.map((candidate, index) => (
                <div className="card mb-3" key={index}>
                    <div className="card-body">
                        <h5 className="card-title">Candidate {index + 1}</h5>
                        <p className="card-text" style={{ whiteSpace: 'pre-wrap' }}>
                            {candidate.content?.parts?.[0]?.text}
                        </p>
                        
                        {/* Показываем блок цитат только если они есть */}
                        {candidate?.citationMetadata?.citationSources?.length > 0 && (
                            <>
                                <h6>Citations:</h6>
                                <ul>
                                    {candidate.citationMetadata.citationSources.map((source, idx) => (
                                        <li key={idx}>
                                            <a href={source.url} target="_blank" rel="noopener noreferrer">
                                                {source.url}
                                            </a>
                                            {` (Indexes: ${source.startIndex} - ${source.endIndex})`}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            ))}

            <h4>Usage Metadata</h4>
            <div className="alert alert-info">
                {/* Исправил названия полей на те, что чаще приходят от API */}
                <p>Prompt Tokens: {usageMetadata?.promptTokenCount || usageMetadata?.promptTokensCount || 0}</p>
                <p>Response Tokens: {usageMetadata?.candidatesTokenCount || 0}</p>
                <p>Total Tokens: {usageMetadata?.totalTokenCount || 0}</p>
            </div>
        </div>
    );
}

export default ChatResponse;