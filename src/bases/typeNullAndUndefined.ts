export const typeNullAndUndefined = (): void => {
  const isActiveBackendResponse = undefined;
  const middleNameBackendResponse = null;

  let isActive: boolean | undefined = isActiveBackendResponse;
  console.log({ isActive });

  let middleName: string | null = middleNameBackendResponse;

  console.log({ middleName });

  console.log("--- END TYPE NULL & UNDEFINED ---");
};
