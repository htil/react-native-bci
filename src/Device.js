//@flow

import {Observable} from "rxjs";

export type ConnectStatus = "Disconnected" | "Connecting" | "Connected" | "Disconnecting";

//Matches the @neurosity/pipes
export type DataPacket = {
	data: Array<Number>,
	timestamp: Date,
	info?: {
		samplingRate?: number,
		channelNames?: Array<string>
	}
}

export interface DeviceManager
{
	getChannelNames(): Array<string>;
	data(): Observable<DataPacket>;
	connect(identifier: string): void;
	search(): void;
	startListening(): void;
	stopListening(): void;
}
