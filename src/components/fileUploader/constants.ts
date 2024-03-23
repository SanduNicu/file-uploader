// export const MAX_CHUNK_SIZE = 5 * 1024 * 1024; // 5MB
// TODO: remove after testing chunks
export const MAX_CHUNK_SIZE = 2000;
export const FORMATTED_MAX_CHUNK_SIZE = `${MAX_CHUNK_SIZE / 1024 / 1024}MB`;
export const SIZE_ERROR = `Files must be under ${FORMATTED_MAX_CHUNK_SIZE}`;
