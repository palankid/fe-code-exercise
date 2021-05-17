const combineContexts = (...contexts) => (
  contexts.reduce(
    (CombinedContexts, CurrentContext) => (
      ({ children }) => (
        <CombinedContexts>
          <CurrentContext>
            {children}
          </CurrentContext>
        </CombinedContexts>
      )
    ),
    ({ children }) => <>{children}</>,
  )
);

export default combineContexts;
