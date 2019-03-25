declare interface IListItemCommentsWebPartStrings {
  ErrorOnLoadingWebDropdown: string;
  LoadingWebDropdown: string;
  WebUrlFieldLabel: string;
    ErrorWebNotFound: string;
    ErrorWebAccessDenied: string;
    WebUrlFieldPlaceholder: string;
    SiteUrlFieldPlaceholder: string;
  ErrorOnLoadingSiteDropdown: string;
  LoadingSiteDropdown: string;
  SiteUrlFieldLabel: string;
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'ListItemCommentsWebPartStrings' {
  const strings: IListItemCommentsWebPartStrings;
  export = strings;
}
