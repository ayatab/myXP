/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PlayerModel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlayerModelUpdateFormInputValues = {
    games?: string;
    experiences?: string;
    user_info?: string;
};
export declare type PlayerModelUpdateFormValidationValues = {
    games?: ValidationFunction<string>;
    experiences?: ValidationFunction<string>;
    user_info?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlayerModelUpdateFormOverridesProps = {
    PlayerModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    games?: PrimitiveOverrideProps<TextAreaFieldProps>;
    experiences?: PrimitiveOverrideProps<TextAreaFieldProps>;
    user_info?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type PlayerModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: PlayerModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    playerModel?: PlayerModel;
    onSubmit?: (fields: PlayerModelUpdateFormInputValues) => PlayerModelUpdateFormInputValues;
    onSuccess?: (fields: PlayerModelUpdateFormInputValues) => void;
    onError?: (fields: PlayerModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlayerModelUpdateFormInputValues) => PlayerModelUpdateFormInputValues;
    onValidate?: PlayerModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PlayerModelUpdateForm(props: PlayerModelUpdateFormProps): React.ReactElement;
