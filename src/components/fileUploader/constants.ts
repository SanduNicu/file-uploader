export const MAX_CHUNK_SIZE = 5 * 1024 * 1024; // 5MB
export const FORMATTED_MAX_CHUNK_SIZE = `${MAX_CHUNK_SIZE / 1024 / 1024}MB`;
export const SIZE_ERROR = `Files must be under ${FORMATTED_MAX_CHUNK_SIZE}`;
