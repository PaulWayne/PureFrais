"use server";
/**
 * Fetches data for a specified Strapi content type.
 *
 * @param {string} contentType - The type of content to fetch from Strapi.
 * @param {string} params - Query parameters to append to the API request.
 * @return {Promise<object>} The fetched data.
 */

import { getStrapiURL } from "@/lib/utils";

const baseUri = getStrapiURL();

interface StrapiData {
  id: number;
  [key: string]: any; // Allow for any additional fields
}

interface StrapiResponse {
  data: StrapiData | StrapiData[];
}

function spreadStrapiData(data: StrapiResponse): StrapiData | null {
  if (Array.isArray(data.data) && data.data.length > 0) {
    return data.data[0];
  }
  if (!Array.isArray(data.data)) {
    return data.data;
  }
  return null;
}

export default async function fetchContentType(
  contentType: string,
  params?: string,
  spreadData?: boolean,
  options?: RequestInit
): Promise<any> {
  try {
    const uri = params
      ? `/api/${contentType}?${params}`
      : `/api/${contentType}`;
    const url = new URL(uri, baseUri);
    const response = await fetch(url, options || {});
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data from Strapi (url=${url.toString()}, status=${
          response.status
        })`
      );
    }
    const jsonData: StrapiResponse = await response.json();
    return spreadData ? spreadStrapiData(jsonData) : jsonData;
  } catch (error) {
    console.error("FetchContentTypeError", error);
  }
}
