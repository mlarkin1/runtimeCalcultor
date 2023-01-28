'use strict';


// Discharging Time = Battery Capacity * Battery Volt*0.9 / Device Watt


const runtime = {
  BatteryCapacity: (Number(prompt('What is the battery capacity?'))),
  BatteryVolts: (Number(prompt('What are the battery volts?'))),
  DeviceWatt: (Number(prompt('What is the device wattage?'))),
  dischargeTime() {
    const batteryTime =  
    Math.trunc((this.BatteryCapacity * this.BatteryVolts * 0.70)
     / this.DeviceWatt); 
     return console.log(`The battery should last about ${batteryTime} hours.`);
  },



};



runtime.dischargeTime();
