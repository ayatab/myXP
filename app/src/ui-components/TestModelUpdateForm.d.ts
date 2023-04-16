/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TestModel } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TestModelUpdateFormInputValues = {
    name?: string;
};
export declare type TestModelUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestModelUpdateFormOverridesProps = {
    TestModelUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TestModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: TestModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    testModel?: TestModel;
    onSubmit?: (fields: TestModelUpdateFormInputValues) => TestModelUpdateFormInputValues;
    onSuccess?: (fields: TestModelUpdateFormInputValues) => void;
    onError?: (fields: TestModelUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TestModelUpdateFormInputValues) => TestModelUpdateFormInputValues;
    onValidate?: TestModelUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TestModelUpdateForm(props: TestModelUpdateFormProps): React.ReactElement;
