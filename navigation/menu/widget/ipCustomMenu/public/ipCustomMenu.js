/**
 *
 * ipCustomMenu widget javascript controller.
 *
 * @package ImpressPages
 * @copyright Copyright (C) 2013 ImpressPages LTD.
 * @license GNU/GPL, see ip_license.html
 */

function IpWidget_ipCustomMenu(widgetObject) {

    this.widgetObject = widgetObject;

    this.manageInit = manageInit;
    this.prepareData = prepareData;


    /*
     * Executed each time, when your widget goes into management state.
     */
    function manageInit() {
        //get widget data currently stored in the database

        var instanceData = this.widgetObject.data('ipWidget').data;

        if (instanceData.menuDepth){
            this.widgetObject.find('.ipCustomMenuDepth').val(instanceData.menuDepth);
        }

        if (instanceData.menuMode){
            this.widgetObject.find('.ipCustomMenuMode').val(instanceData.zoneName);
        }else{
            this.widgetObject.find('.ipCustomMenuMode').prop("selectedIndex",0);
        }
    }

    /*
     * This function is executed when user press "confirm" or "save".
     * This function should return data object that needs to be stored into the dabase.
     *
     */
    function prepareData() {

        var data = Object();

        data.menuDepth = parseInt(this.widgetObject.find('.ipCustomMenuDepth').val());

        if (this.widgetObject.find('.ipCustomMenuMode').prop("selectedIndex") == 0){
            data.menuMode = 0;
            data.zoneName = '';
        }else{
            data.menuMode = 1;
            data.zoneName = this.widgetObject.find('.ipCustomMenuMode').val();
        }

        $(this.widgetObject).trigger('preparedWidgetData.ipWidget', [ data ]);
    }

};
/**
 * Created with JetBrains PhpStorm.
 * User: marijus
 * Date: 13.10.28
 * Time: 11.09
 * To change this template use File | Settings | File Templates.
 */
