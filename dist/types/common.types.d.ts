import { Timestamp as FirebaseTimestamp, FieldValue } from 'firebase/firestore';
/**
 * Represents a Firestore Timestamp structure for cases where data might be serialized
 * or when the full class instance isn't available.
 * Note: Prefer using FirebaseTimestamp class directly when possible.
 */
export interface FirestoreTimestampData {
    seconds: number;
    nanoseconds: number;
}
/**
 * Represents various forms a date/timestamp can take in the application.
 * - FirebaseTimestamp: The actual Timestamp object from Firestore.
 * - Date: Standard JavaScript Date object.
 * - string: An ISO string representation of a date.
 * - FirestoreTimestampData: A plain object representation of a timestamp.
 */
export type DateLike = FirebaseTimestamp | Date | string | FirestoreTimestampData;
/**
 * Represents a date value that is being written to Firestore.
 * This can be any DateLike value or a server timestamp sentinel.
 */
export type FirestoreWriteTimestamp = DateLike | FieldValue;
/**
 * Utility type to make specific fields of an interface optional.
 */
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
