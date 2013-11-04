<?php
namespace Modules\navigation\menu\widget;

if (!defined('CMS')) exit;


class ipCustomMenu extends \Modules\standard\content_management\Widget {

    public function previewHtml($instanceId, $data, $layout) {

        global $site;

        if ($data['menuMode'] == "0"){

            $page_id =  $site->getCurrentElement()->getId();

            if ($data['menuDepth'] == "0"){
                $data['pages'] = \Ip\Menu\Helper::getChildItems($site->getCurrentZone()->getName(), $page_id);
            }else{
                $data['pages'] = \Ip\Menu\Helper::getChildItems($site->getCurrentZone()->getName(), $page_id, $data['menuDepth']);
            }

        }else{

            if ($data['menuDepth'] == "0"){
                $data['pages'] =  \Ip\Menu\Helper::getZoneItems($data['zoneName'], 1);
            }else{
                $data['pages'] =  \Ip\Menu\Helper::getZoneItems($data['zoneName'], 1, $data['menuDepth']);
            }
        }

        return parent::previewHtml($instanceId, $data, $layout);
    }


    public function managementHtml($instanceId, $data, $layout) {

        $data['managedZones'] = $this->getContentManagementZones();

        return parent::managementHtml($instanceId, $data, $layout);

    }

    /**
     * Sets title in management area
     * @return string
     */
    public function getTitle() {
        return 'Custom menu';
    }


    /**
     * Returns an array with zone names available for content management
     *
     * @return array
     */
    protected function getContentManagementZones(){
        global $site;
        $answer = array();
        foreach($site->getZones() as $zone){
            if ($zone->getAssociatedModuleGroup() == 'standard' && $zone->getAssociatedModule() == 'content_management') {
                $answer[$zone->getName()] = $zone->getTitle();
            }
        }
        return $answer;
    }


}