import * as React from 'react';
import {Text} from '@microsoft/sp-core-library'
import styles from './ListItemComments.module.scss';
import { IListItemCommentsProps } from './IListItemCommentsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { UrlQueryParameterCollection } from '@microsoft/sp-core-library';
import { TimeZone} from '@pnp/pnpjs'
import { SPHttpClient } from '@microsoft/sp-http';
import * as moment from "moment";
import * as wpF from '../ListItemCommentsWebPart'
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
export interface ICommentState {
  commentValue : string;
}
export default class ListItemComments extends React.Component<IListItemCommentsProps, ICommentState> {

  public spHttpClient: SPHttpClient;
  private wpF : any;
  private cols : number;
  private rows : number;
  fileTypeTextField: any;
  constructor (props){
    super(props);

    this.state = {
        commentValue : '',
      };
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this);

  }
  protected onInit() {



  }
private _queryStringParam = this.props.queryString;
private queryParameters = new UrlQueryParameterCollection(window.location.href);
private _itemId = this.queryParameters.getValue(this._queryStringParam);

  public render(): React.ReactElement<IListItemCommentsProps> {
let editor : any;
let commentAuthor : any;
let day : any;
let month : any;
let year : any;
let hour : any;
let minutes : any;
let time : any;
let condition : any;
let timeconverted : any;
let date : any;
let local : any;
let stillUtc : any;
let cols = 80;
let rows = 20;
    return (

      <div className={ styles.listItemComments }>
      <form onSubmit={this.handleSubmit}>
        <label>
         <div>Add a new comment</div>
         <textarea className={ styles.commentbox } name="text" value={this.state.commentValue} onChange={this.handleChange} rows={this.rows} cols={this.cols}>

   </textarea>

        </label>
        <input className={ styles.button } type="submit" value="Add Comment" />
      </form>

        <div className={ styles.container }>
        <ul className={ styles.list }>
        { this.props.spListItems &&
          this.props.spListItems.map((list, index) => (
            editor = JSON.stringify(list.Editor),
            commentAuthor = editor.split('"')[5],
            date = moment.utc(list.Modified).format('YYYY-MM-DD HH:mm:ss'),
            stillUtc = moment.utc(date).toDate(),
            local = moment(stillUtc).local().format('YYYY-MM-DD HH:mm:ss'),
            year = local.substring(0, 4),
            month = local.split('-')[1],
            time = local.substring(11,list.Modified.length-4),
            day = local.substring(8, 10),
            hour = time.substring(0,time.length-6),
            minutes = list.Modified.split(':')[1],
            condition = list.V3Comments,
            console.log(local),

            <li key={list.ID} className={ styles.item }>
            <p className={ styles.paragraph }>{list.V3Comments}</p> <div className={ styles.author }>{commentAuthor + " - " + day + "/" + month + "/" + year + " at " + time}</div>
            </li>
        )
        )
        }
      </ul>
      </div>

      </div>

    )
  }
  private handleChange = (event): void => {
    this.setState({commentValue: event.target.value});
  }
  private handleSubmit = (event): void => {
    event.preventDefault();
    this.props.onUpdateListItem(this.state.commentValue);
    this.setState({commentValue: ''})
  }
}
