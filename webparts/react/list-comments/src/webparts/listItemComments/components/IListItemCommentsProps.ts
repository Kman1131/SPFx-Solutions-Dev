import { TimeZone} from '@pnp/pnpjs'
import {
  ButtonClickedCallback,
  ICommentsListItem
} from '../../../models';
import { WebPartContext } from '@microsoft/sp-webpart-base';
export interface IListItemCommentsProps {
  description: string;
  digest: string;
  listName:string;
  fileTypes:string;
  queryString:string;
  uploadFilesTo:string;
  siteUrl:string;
  webUrl:string;
  context: WebPartContext;
  columnName: string;
  itemId: string;
  spListItems: ICommentsListItem[];
  onUpdateListItem?: ButtonClickedCallback;
  commentValue: any;
}
