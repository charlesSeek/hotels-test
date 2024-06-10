function truncateString(input: string): string {
  const maxLength = 28;
  if (input.length > maxLength) {
    return input.substring(0, maxLength) + '...';
  }
  return input;
}

export { truncateString }