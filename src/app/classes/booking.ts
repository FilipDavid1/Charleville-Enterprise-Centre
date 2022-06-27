export class Booking {
    startTime: any;
    endTime: any;
    startDate: any;
    endDate: any;
    numberOfDesk: number;
    accepted: boolean;

    constructor(startTime: any, endTime: any, startDate: any, endDate: any, numberOfDesks: number , accepted: boolean) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.startDate = startDate;
        this.endDate = endDate;
        this.numberOfDesk = numberOfDesks;
        this.accepted = accepted;
    }
}
