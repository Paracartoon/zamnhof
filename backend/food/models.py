from django.db import models
from django.contrib import admin
from django.conf import settings
from django.utils import timezone
import datetime

food_kinds = (('colazione','colazione'), ('pranzo','pranzo'), ('cena','cena'), ('da bere','da bere'))
Today = datetime.datetime.now().date()




class Piatto(models.Model):
	titolo = models.CharField(max_length=200)
	tipo_piatto = models.CharField(max_length=100, choices=food_kinds)
	ingredienti = models.CharField(max_length=300, null=True)
	prezzo = models.IntegerField(default=0, blank=True)
	commento = models.CharField(max_length=200, blank=True, null=True)
	foto = models.ImageField(upload_to='images/pets', blank=True)

	def __str__(self):
		return self.titolo

	class Meta:
		verbose_name_plural = "Piatti"
		verbose_name = "Piatto"




class PiattoAdmin(admin.ModelAdmin):

	
	list_display = ('titolo', 'tipo_piatto', 'ingredienti', 'prezzo', 'foto')





admin.site.register(Piatto, PiattoAdmin)

