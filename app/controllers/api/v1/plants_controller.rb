module Api
  module V1
    class PlantsController < ApplicationController
      def index
        plant = Plant.find(1)
        render json: {status: 'SUCCESS', message: 'Plants retrieved', data: plant}, status: :ok
      end
    end
  end
end