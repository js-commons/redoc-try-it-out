export type CallbackFunction = () => void;

export interface SwaggerOptions {
  url?: string;
  dom_id?: string;
  version?: string;
  authorizeBtnSelector?: string;
  authorizeDoneBtnSelector?: string;
  authorizeModalSelector?: string;
  authorizeModalCloseBtnSelector?: string;
  operationSectionContainerSelector?: string;
  operationContainerSelector?: string;
  operationSummaryPatternSelector?: string;
  hideClass?: string;
  showClass?: string;
  authModalClass?: string;
  selectedOperationContainerClass?: string;
  wrapperSelector?: string;
  onComplete?: CallbackFunction;
  // This is not actually a Swagger UI option, but it's used in the code to disable zenscroll
  // and its on by default if swaggerOptions is passed in to the RedocTryItOutConfig
  // Extra options like this that are passed into Swagger UI will be ignored anyway
  disableZenscroll?: boolean;
}
