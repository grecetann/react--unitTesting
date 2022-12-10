
/**
 * input Props Types
 *
 * @interface InputFormProps
 * @typedef {InputFormProps}
 */

 interface InputFormProps{
    /**
      * label input 
      *
      * *@type {?string}
      * @default ""
      */
       label: string;
        /**
      * className input 
      *
      * *@type {?string}
      * @default ""
      */
         className: string;
        /**
      * name input 
      *
      * *@type {?string}
      * @default ""
      */
     name:string;
            /**
   *changeHandler
   *
   * *@type {?string}
   * @default ""
   */
  changeHandler:(event:React.ChangeEvent<HTMLInputElement>)=>void
 }
 export type { InputFormProps };