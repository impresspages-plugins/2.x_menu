<div>
    Source:
<select class="ipCustomMenuMode">
<option value="">Subpages of current page</option>
<?php
foreach ($managedZones as $zoneName => $zoneTitle){
    ?><option value="<?php
    echo $this->esc($zoneName);
    ?>"><?php
        echo 'Zone: ',$this->esc($zoneTitle); ?></option>
<?php } ?>
</select>
</div>
<div>
    Depth:
<select class="ipCustomMenuDepth">
    <option value="0">Unlimited</option>
<?php
for ($depth=1; $depth<=5; $depth++){ ?>
   <option value="<?php echo $depth; ?>"><?php echo $depth; ?></option>
<?php
   }
?>
</select>
</div>
