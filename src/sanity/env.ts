export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-14'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skHjjgpggTiJ4dbY7ITu3putxm8qPB6Ylm8v4Yp1z31tHErP9xv5rD42sq0fWIEwQJEE9MEE7joy6of9Wzd1XrDmqurRy0EfNF5ekxmttK8fqwlkJjbuBgT6orXepkPxmWEwRmU6xEssx9jt8ccyaRX1qHS0F7QtlC7nBFSktlrBU58Qymj5",
  'Missing environment variable: SANITY_API_TOKEN'
)




function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
