import { Text } 								from '@microsoft/sp-core-library';
import { SPHttpClient, SPHttpClientResponse, ISPHttpClientOptions } 	from '@microsoft/sp-http';
import { escape } from '@microsoft/sp-lodash-subset';
// other import statements
const $: any = require("jquery");
require('SPServices');
export class ListCommentService {

	/***************************************************************************
     * The spHttpClient object used for performing REST calls to SharePoint
     ***************************************************************************/
    private spHttpClient: SPHttpClient;


	/**************************************************************************************************
     * Constructor
     * @param httpClient : The spHttpClient required to perform REST calls against SharePoint
     **************************************************************************************************/
    constructor(spHttpClient: SPHttpClient) {
        this.spHttpClient = spHttpClient;
    }


	/**************************************************************************************************
	 * Performs a CAML query against the specified list and returns the resulting items
	 * @param webUrl : The url of the web which contains the specified list
	 * @param listId : The id of the list which contains the elements to query
	 * @param camlQuery : The CAML query to perform on the specified list
	 **************************************************************************************************/
	public getListItemComments(webUrl: string, listId: string, itemId: string, camlQuery: string): Promise<any> {
		return new Promise<any>((resolve,reject) => {
			let endpoint = Text.format("{0}/_api/lists/getbytitle('{1}')/Items({2})/versions?$expand=FieldValuesAsText,FieldValuesAsHtml", webUrl, listId, itemId);
			let data:any = {
				query : {
					__metadata: { type: "SP.CamlQuery" },
					ViewXml: camlQuery
				}
			};
			let options: ISPHttpClientOptions = { headers: { 'odata-version': '3.0' }, body: JSON.stringify(data) };

			this.spHttpClient.post(endpoint, SPHttpClient.configurations.v1, options)
				.then((postResponse: SPHttpClientResponse) => {
					if(postResponse.ok) {
            resolve(postResponse.json());
            let outPut = resolve(postResponse.json());
            console.log(outPut);
					}
					else {
						reject(postResponse);
					}
				})
				.catch((error) => {
					reject(error);
				});
        });
	}

}
