import { useCallback } from "react";
import { toast } from "react-toastify";

interface RequestCatcherParams {
  requestFunction: (payload?: any) => any;
  payload?: any;
  successMessage?: string;
  errorMessage?: string;
}

export default function useRequestCatcher() {
    const requestCatcher = useCallback(async ({
        requestFunction,
        payload,
        successMessage,
        errorMessage = "An error occurred",
    }: RequestCatcherParams) => {
        try {
            const result = await requestFunction(payload)
            if (successMessage) toast.success(successMessage)
            return result
        } catch (error) {
            toast.error(errorMessage);
            console.error(errorMessage, error);
            throw error
        }
    },[])

    return { requestCatcher }
}
