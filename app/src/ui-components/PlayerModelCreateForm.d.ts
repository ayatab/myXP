/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlayerModelCreateFormInputValues = {
    games?: string;
    experiences?: string;
    user_id?: string;
};
export declare type PlayerModelCreateFormValidationValues = {
    games?: ValidationFunction<string>;
    experiences?: ValidationFunction<string>;
    user_id?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlayerModelCreateFormOverridesProps = {
    PlayerModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    games?: PrimitiveOverrideProps<TextAreaFieldProps>;
    experiences?: PrimitiveOverrideProps<TextAreaFieldProps>;
    user_id?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlayerModelCreateFormProps = React.PropsWithChildren<{
    overrides?: PlayerModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PlayerModelCreateFormInputValues) => PlayerModelCreateFormInputValues;
    onSuccess?: (fields: PlayerModelCreateFormInputValues) => void;
    onError?: (fields: PlayerModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlayerModelCreateFormInputValues) => PlayerModelCreateFormInputValues;
    onValidate?: PlayerModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function PlayerModelCreateForm(props: PlayerModelCreateFormProps): React.ReactElement;
