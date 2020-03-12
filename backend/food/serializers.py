from rest_framework import serializers
from .models import Piatto

class PiattoSerializer(serializers.ModelSerializer):
	#modified = serializers.HiddenField(default=timezone.now)

	class Meta:
		model = Piatto
		fields = '__all__'

	'''def create(self, validated_data):
		return Article.objects.create(**validated_data)'''
