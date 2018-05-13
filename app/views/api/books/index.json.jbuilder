json.array!(@books) do |book|
  json.extract! book, :id, :title, :picture_url
end
