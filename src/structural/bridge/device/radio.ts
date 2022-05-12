import { DeviceImp } from './deviceImp';

export class Radio implements DeviceImp {
  private volume = 10;
  private power = false;
  private name = 'Radio';

  getName(): string {
    return this.name;
  }

  getPower(): boolean {
    return this.power;
  }

  setPower(powerStatus: boolean): void {
    this.power = powerStatus;
  }

  getVolume(): number {
    return this.volume;
  }

  setVolume(volume: number): void {
    if (volume < 0) return;
    if (volume > 100) return;
    this.volume = volume;
  }
}
