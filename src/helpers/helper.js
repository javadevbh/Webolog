const shortenDescription = (desc) => {
  const partialText = desc.substring(0, 150);
  const finalText = partialText + "...";
  return finalText;
};

export {shortenDescription}
