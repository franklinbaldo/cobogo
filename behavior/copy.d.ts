export interface CopyActionOptions {
  selector?: string
  statusSelector?: string
  successLabel?: string
  failureLabel?: string
  successMessage?: string
  failureMessage?: string
  successDuration?: number
  failureDuration?: number
}

export declare function bindCopyActions(options?: CopyActionOptions): void
