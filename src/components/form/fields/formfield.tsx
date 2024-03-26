import { Box, TextField, Typography, useTheme } from "@mui/material";
import { ErrorMessage, Field } from "formik";
import { InputHTMLAttributes } from "react";
import { tokens } from "theme";

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  variant: string;
  shrink?: boolean;
  [x: string]: any;
}

const FormField: React.FC<FieldProps> = ({
  label,
  name,
  variant,
  shrink,
  ...rest
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      mb="30px"
      sx={{
        "& label.Mui-focused": {
          color: colors.primary[200],
        },
      }}
    >
      <Field
        {...rest}
        type={rest.type ?? "text"}
        fullWidth
        name={name}
        as={TextField}
        label={label}
        variant={variant}
        InputLabelProps={shrink ? { shrink: shrink } : null}
      />
      <Box>
        <Typography
          component="div"
          variant="caption"
          color="error"
          fontWeight="regular"
          mt={0.75}
        >
          <ErrorMessage name={name} />
        </Typography>
      </Box>
    </Box>
  );
};

export default FormField;
