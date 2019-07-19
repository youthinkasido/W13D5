class Api::PokemonController < ApplicationController

    def index 
        @pokemon = Pokemon.all
       
    end 

    def show 
        @pokemon = Pokemon.find_by(id: params[:id])
        @items = @pokemon.items
    end

end