import { DeviceImp } from '../device/deviceImp';

export class RemoteControl {
  constructor(protected device: DeviceImp) {}

  togglePower(): void {
    this.device.setPower(!this.device.getPower());

    console.log(
      `${this.device.getName()} power status: ${this.device.getPower()}`,
    );
  }
}
