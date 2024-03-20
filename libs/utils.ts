import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function splitUrlIntoSegments(url) {
  const trimmedUrl = url.replace(/^\/|\/$/g, '');
  const segments = trimmedUrl.split('/');
  return segments;
}

export function isObjectEmpty(obj) {
	for (const prop in obj) {
		if (obj.hasOwnProperty(prop)) return false;
	}
	return true;
}
