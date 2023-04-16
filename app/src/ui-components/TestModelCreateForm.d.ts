/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TestModelCreateFormInputValues = {
    name?: string;
};
export declare type TestModelCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestModelCreateFormOverridesProps = {
    TestModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TestModelCreateFormProps = React.PropsWithChildren<{
    overrides?: TestModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TestModelCreateFormInputValues) => TestModelCreateFormInputValues;
    onSuccess?: (fields: TestModelCreateFormInputValues) => void;
    onError?: (fields: TestModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TestModelCreateFormInputValues) => TestModelCreateFormInputValues;
    onValidate?: TestModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function TestModelCreateForm(props: TestModelCreateFormProps): React.ReactElement;
