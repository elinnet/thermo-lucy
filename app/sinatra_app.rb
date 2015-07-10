require 'sinatra/base'

class ThermoApp < Sinatra::Base

  enable :sessions

  set :views, proc {File.join(root,'.', 'views')}

  get '/' do 




    erb :'main/thermostat'
  end

  run! if app_file == $0
end