# Generated by Django 3.1.1 on 2020-09-09 17:15

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('kib_app', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='drink',
            old_name='directions',
            new_name='description',
        ),
        migrations.RenameField(
            model_name='drink',
            old_name='image',
            new_name='image_thumb_url',
        ),
        migrations.AddField(
            model_name='drink',
            name='preparation',
            field=models.CharField(default='This is how to make this drink.', max_length=1000),
            preserve_default=False,
        ),
        migrations.CreateModel(
            name='Hide',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Favorite',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='drink',
            name='favorite',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='kib_app.favorite'),
        ),
        migrations.AddField(
            model_name='drink',
            name='hide',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='kib_app.hide'),
        ),
    ]
