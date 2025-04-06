export enum EnrollmentStatus {
  ENROLLED = 'ENROLLED',
  LEAVE = 'LEAVE',
  GRADUATED = 'GRADUATED',
  DEFERRED = 'DEFERRED',
}

export const ENROLLMENT_STATUS_LABELS: Record<EnrollmentStatus, string> = {
  [EnrollmentStatus.ENROLLED]: '재학중',
  [EnrollmentStatus.LEAVE]: '휴학중',
  [EnrollmentStatus.GRADUATED]: '졸업',
  [EnrollmentStatus.DEFERRED]: '졸업 유예',
};

export const ENROLLMENT_STATUS_OPTIONS = Object.entries(ENROLLMENT_STATUS_LABELS).map(
  ([value, label]) => ({
    value: value as EnrollmentStatus,
    label,
  })
);
