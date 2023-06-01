import { BarDatum } from '@nivo/bar';
import axios, { AxiosInstance, AxiosPromise } from 'axios';
import { IContactData, IGeographyData, IPieData } from 'model/app';

class ApiService {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.PUBLIC_URL}/data`,
    });
  }

  public getContactData = (): AxiosPromise<IContactData[]> => {
    return this.instance.get<IContactData[]>('/mockContacts.json');
  };

  public getBarData = (): AxiosPromise<BarDatum[]> => {
    return this.instance.get<BarDatum[]>('/mockBar.json');
  };

  public getPieData = (): AxiosPromise<IPieData[]> => {
    return this.instance.get<IPieData[]>('/mockPie.json');
  };

  public getGeographyData = (): AxiosPromise<IGeographyData[]> => {
    return this.instance.get<IGeographyData[]>('/mockGeography.json');
  };
}

export default new ApiService();
