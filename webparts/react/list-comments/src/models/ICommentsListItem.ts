import { ICommentAuthor } from './ICommentAuthor';
export interface ICommentsListItem{
  ID: string;
  V3Comments: string;
  Modified: string;
  Editor: ICommentAuthor[];
  Author: string;
  IssueStatus: string;
  CreatedBy: any;
  LookupValue: string;
}
