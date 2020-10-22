const createDataTestId = (componentName: string) => (primary?: string, secondary?: string) => {
  if (secondary) {
    return `${componentName}-${primary}--${secondary}`;
  } else if (primary) {
    return `${componentName}-${primary}`;
  } else {
    return componentName;
  }
};

export { createDataTestId };
