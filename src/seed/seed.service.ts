import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {



  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter
  ) { }

  async executeSeed() {
    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=65');

    const pokemonToIsert: { name: string, no: number }[] = [];

    await this.pokemonModel.deleteMany({});

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];
      pokemonToIsert.push({ name, no });
    })
    await this.pokemonModel.insertMany(pokemonToIsert);
    return 'Seed executed';
  }

}
