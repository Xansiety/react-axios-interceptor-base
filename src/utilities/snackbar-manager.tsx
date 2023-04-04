import { useSnackbar, VariantType, WithSnackbarProps } from "notistack";

let useSnackbarRef: WithSnackbarProps;

export const SnackbarUtilitiesConfig: React.FC = () => {
  useSnackbarRef = useSnackbar();
  return null;
};

export const SnackbarUtilities = {
  toast(message: string, variant: VariantType = "default") {
    useSnackbarRef.enqueueSnackbar(message, { variant });
  },
  success(message: string) {
    this.toast(message, "success");
  },
  error(message: string) {
    this.toast(message, "error");
  },
  warning(message: string) {
    this.toast(message, "warning");
  },
  info(message: string) {
    this.toast(message, "info");
  },
};
