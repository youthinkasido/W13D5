json.extract! @party, :name



#not able to extract title from gift

json.guests @party.guests do |guest|
        json.name guest.name 
        json.gifts guest.gifts, :title
end






# json.array! @party do |guests|
#     json.array! @guests do |guest|
#      json.extract! guest.gifts, :title
#     end
#  end